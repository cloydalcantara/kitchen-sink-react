import React, { useState } from 'react';
import { Button, Form, FormGroup, Row, Col, Table, Card, CardBody, CardTitle, Input, ButtonGroup, DropdownToggle, ButtonDropdown, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { drop } from 'lodash';

const Index = () => {
    const [dropdown, setDropdown] = useState(null)
    const [modal, setModal] = useState(false)
    return (
        <Card>
            <CardBody>
            <div className="d-flex no-block">
                <CardTitle>User Manager</CardTitle>
                <div className="ml-auto">
                    <Input type="select" className="custom-select">
                        <option defaultValue="0">January</option>
                        <option defaultValue="1">February</option>
                        <option defaultValue="2">March</option>
                        <option defaultValue="3">April</option>
                    </Input>
                </div>
                <div className="ml-1">
                    <Button color="primary" onClick={() => setModal(!modal)}>
                        ADD NEW
                    </Button>
                </div>
            </div>
            <div className="mt-3">
                <Table className="stylish-table mb-0" responsive>
                    <thead>
                        <tr>
                            <th colSpan="2" className="text-muted font-medium border-top-0">
                            Assigned
                            </th>
                            <th className="text-muted font-medium border-top-0">Name</th>
                            <th className="text-muted font-medium border-top-0">
                            Priority
                            </th>
                            <th className="text-muted font-medium border-top-0">Budget</th>
                            <th className="text-muted font-medium border-top-0">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <span className="round">"IMAGE</span>
                            </td>
                            <td>
                            {"NAME"}
                            </td>
                            <td>"TEMPLATE"</td>
                            <td>
                                <span className={'badge badge-primary'}>
                                    success
                                </span></td>
                            <td>{"budget"}</td>
                            <td>
                                <ButtonGroup>
                                    <Button color={'success'}><i className="ti ti-pencil"></i></Button>
                                    <ButtonDropdown
                                        className='ml-1'
                                        isOpen={dropdown === 0 ? true : false}
                                        toggle={() => setDropdown(dropdown === 0 ? null : 0)}
                                    >
                                        <DropdownToggle color="danger"><i className="ti ti-trash"></i></DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Yes</DropdownItem>
                                            <DropdownItem>No</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Modal
                isOpen={modal}
                toggle={() => setModal(!modal)}
            >
                <ModalHeader toggle={() => setModal(!modal)}>Modal title</ModalHeader>
                <ModalBody>
                    <Form id="crudForm" name="crudForm">
                        <FormGroup>
                            <label className="control-label" htmlFor="title">
                                Title *
                            </label>
                            <div className="mb-2">
                                <Input
                                    placeholder="Title"
                                    type="text"
                                    name="title"
                                    required
                                    className="form-control"
                                />
                            </div>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">
                        Do Something
                    </Button>
                        <Button color="secondary">
                            Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            </CardBody>
        </Card>
    );
}

export default Index;
