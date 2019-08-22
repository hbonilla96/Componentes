import React from 'react';
import { connect } from 'react-redux'
import SavePinToBoard from '@/redux/ActionCreators/SavePin';
import { NewTableModal } from '@/components/shared/Modals';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input,
} from '@/components/shared/CssComponents';

import './styles.css';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    pins: state.login.login,
    isLoading: state.login.isLoading,
    error: state.login.error
  }
}

const mapDispatchToProps = {
  SavePinToBoard
}

class PreviewImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modals: {
        table: false,
      }
    };
  }

  openTableModal = () => {
    this.setState({
      modals: {
        table: !this.state.modals.table,
      }
    })
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
                <div className="col-md-6">
                  {
                    this.props.image &&
                    <img src={this.props.image.download_url} className="image-preview" alt="pepe" />
                  }
                </div>
                <div className="col-md-6">
                  <Form>
                    <Label htmlFor="exampleSelect">Select Board</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Forest</option>
                      <option>Space</option>
                      <option>Beach</option>
                      <option>Home</option>
                      <option>Other</option>
                    </Input>
                  </Form>
                  <p>Or Create new board</p>
                  <Button color="primary" onClick={this.openTableModal}>Create new Board</Button>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.SavePinToBoard}>Pin Image</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <NewTableModal
          modal={this.state.modals.table}
          toggle={this.openTableModal}
          image={this.props.image}
          params={{
            modalTitle: 'Create board',
          }
          } />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewImageModal);