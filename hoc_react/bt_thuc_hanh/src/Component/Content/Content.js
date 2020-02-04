import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: 0
        }

    }

    thongbao = () => { alert("cach xu li tuong tac trong react") }
    thongbao2 = () => { alert("xin đừng remove") }

    renderButton = () => (
        <div className="row">
            <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
            <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
        </div>
    )

    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input defaultValue={this.props.tieude} type="text" name="ten" className="form-control" />

            </div>
            <div className="form-group">

                <div className="btn btn-danger" onClick={() => this.saveClick()}>Save</div>
            </div>
        </div>
    )

    displayCheck = () => {
        if (this.state.trangThai === 0) {
            return this.renderButton();
        } else {
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({ trangThai: 1 });
    }

    saveClick = () => {
        this.setState({ trangThai: 0 });
    }

    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className={"col-lg-6 " + this.props.vitri} >
                                <div className=" p-5">
                                    <img className="img-fluid rounded-circle" src={this.props.anh} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.tieude}</h2>
                                    <p>Hello! This is a generator for text fonts of the "cool" variety. I noticed people were trying to
                                        find a generator like fancy letters, but were ending up on actual font sites rather than
                                        generators of copy-paste text like this one. So currently this is basically a duplicate of the
                                        above, but I think I'll try to collect a few more "cool" text fonts, like the old enlgish one,
                        and specialise this a bit.</p>

                                    {this.displayCheck()}

                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;