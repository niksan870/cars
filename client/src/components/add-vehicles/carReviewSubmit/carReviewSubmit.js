import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

class carReviewSubmit extends Component {
  constructor() {
    super();

    this.state = {
      rating0: 1,
      rating1: 1,
      rating2: 1,
      rating3: 1,
      rating4: 1,
      rating5: 1,
      rating6: 1,
      rating7: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    console.log(name);
    switch (true) {
      case name === "rate0":
        this.setState({ rating0: nextValue });
        break;
      case name === "rate1":
        this.setState({ rating1: nextValue });
        break;
      case name === "rate2":
        this.setState({ rating2: nextValue });
        break;
      case name === "rate3":
        this.setState({ rating3: nextValue });
        break;
      case name === "rate4":
        this.setState({ rating4: nextValue });
        break;
      case name === "rate5":
        this.setState({ rating5: nextValue });
        break;
      case name === "rate6":
        this.setState({ rating6: nextValue });
        break;
      case name === "rate7":
        this.setState({ rating7: nextValue });
        break;
      default:
    }
  }

  render() {
    const {
      rating0,
      rating1,
      rating2,
      rating3,
      rating4,
      rating5,
      rating6,
      rating7
    } = this.state;

    return (
      <div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-8">
              <div class="form-group">
                <label for="exampleFormControlInput1">Заглавие: </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Напиши заглавие..."
                />
              </div>
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Оцени: </label>
              <StarRatingComponent
                name="rate0"
                starCount={5}
                value={rating0}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label for="exampleFormControlTextarea1">Съдържание: </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputState">Безобасност: </label>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating1}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Представяне: </label>
              <StarRatingComponent
                name="rate2"
                starCount={5}
                value={rating2}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Комфорт: </label>
              <StarRatingComponent
                name="rate3"
                starCount={5}
                value={rating3}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputState">Цена: </label>
              <StarRatingComponent
                name="rate4"
                starCount={5}
                value={rating4}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Технология: </label>
              <StarRatingComponent
                name="rate5"
                starCount={5}
                value={rating5}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Интериор: </label>
              <StarRatingComponent
                name="rate6"
                starCount={5}
                value={rating6}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12 text-cetner">
              <label for="inputState">Надежност: </label>
              <StarRatingComponent
                name="rate7"
                starCount={5}
                value={rating7}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
          <div className="form-row text-cetner">
            <div className="form-group col-md-12 text-center">
              <button type="submit" className="btn btn-primary">
                Изпрати
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default carReviewSubmit;
