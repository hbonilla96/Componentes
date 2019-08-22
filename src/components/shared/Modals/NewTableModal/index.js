import React from 'react';
import { connect } from 'react-redux'
import SavePinToBoard from '@/redux/ActionCreators/SavePin';
import { categories } from '@/constants/categories';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from '@/components/shared/CssComponents';

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = {}

class NewTableModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('props modal', this.props);
    return (
      <div>
        <Modal size="lg" isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>{this.props.params.modalTitle}</ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  {
                    this.props.image &&
                    <img src={this.props.image.download_url} className="image-preview" alt="pepe" />
                  }
                </div>
                <div className="col-md-8">
                  <Form>
                    <FormGroup>
                      <Label htmlFor="boardName">Name</Label>
                      <Input type="text" name="boardName" id="boardName" placeholder="Create board" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="description">Description</Label>
                      <Input type="textarea" name="description" id="description" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleSelect">Select Category</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        {
                          categories.map((el, i) => (
                            <option key={i}>{el.name}</option>
                          ))
                        }
                      </Input>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.SavePinToBoard}>Create Board</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTableModal);