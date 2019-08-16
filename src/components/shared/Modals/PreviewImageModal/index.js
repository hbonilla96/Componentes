import React from 'react';
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
  FormText,
} from '@/components/shared/CssComponents';

import './styles.css';

class PreviewImageModal extends React.Component {
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
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>Pin Image</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default PreviewImageModal;