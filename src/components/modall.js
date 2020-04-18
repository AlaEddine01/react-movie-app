import React, { Component } from "react";
import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
// var subtitle;

export default class Modall extends Component {
  state = {
    modalIsOpen: false,
    image: "",
    name: "",
    rank: "",
    year: "",
  };
  openModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  };
  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  add = (e) => {
    const { image, name, rank, year } = this.state;
    this.props.add(image, name, rank, year);
    this.closeModal();
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="btn-show">
          Add Film
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="33"
            viewBox="0 0 24 24"
            width="33"
          >
            <g>
              <rect fill="none" height="24" width="24" x="0" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M21,3H3C1.89,3,1,3.89,1,5v12c0,1.1,0.89,2,2,2h5v2h8v-2h2v-2H3V5h18v8h2V5C23,3.89,22.1,3,21,3z M13,10V7h-2v3H8v2h3v3 h2v-3h3v-2H13z M24,18l-4.5,4.5L18,21l3-3l-3-3l1.5-1.5L24,18z" />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          //   style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-inputs">
            <label>
              Film Name
              <input
                className="inputs"
                type="text"
                id="fname"
                name="name"
                placeholder="Film Name"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Year
              <input
                className="inputs"
                type="number"
                id="fname"
                name="year"
                placeholder="Year"
                onChange={this.handleChange}
              />
            </label>

            <label for="rating">
              Film Rating
              <input
                className="inputs"
                type="number"
                id="fname"
                name="rank"
                placeholder="Film Rating"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Film Poster Link
              <input
                className="inputs"
                type="text"
                id="fname"
                name="image"
                placeholder="Film Poster Link"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="modal-btns">
            <input
              id="closebtn"
              type="button"
              value="Close"
              onClick={this.closeModal}
            />
            <img className='popcorn'
              src="https://i.pinimg.com/originals/86/cd/cc/86cdcc9e74e2296ed5600692f6a1b48e.png"
              alt="popcorn"
            />
            <input
              id="addbtn"
              type="button"
              value="Add Film"
              onClick={this.add}
            />
          </div>
        </Modal>
      </div>
    );
  }
}
