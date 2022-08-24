import React, { useEffect, useRef, useState } from "react";

const index = () => {
  const [wrapperRef, setWrapperRef] = useState();

  const wrapper = useRef(null);
  //   var sliders = document.querySelectorAll(".slider-wrapper");

  useEffect(() => {
    const wrapperRef = wrapper.current;
    setWrapperRef(wrapperRef);
  }, []);

  const leftSide = (e) => {
    wrapperRef.scrollLeft -= 180;
  };
  const rightSide = (e) => {
    wrapperRef.scrollLeft += 180;
  };

  return (
    <>
      <main>
        <div className="container">
          <div id="todays-deals" className="section">
            <h3>Today's Deals</h3>
            <div className="slider-wrapper">
              <div className="slider items">
                <div ref={wrapper} className="wrapper">
                  <div className="item slide foot">
                    <figure>
                      <img
                        src="images/product-1-thumb.jpg"
                        alt="H.E.B Brown Sugar photo thumb"
                      />
                    </figure>
                    <h4>H.E.B Brown Sugar</h4>
                    <div className="specs">200g</div>
                    <div className="price discounted">
                      <span>8$</span> - <span>6$</span>
                    </div>
                    <div className="rate">
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/half-star.svg"
                        style={{ width: "14px" }}
                        alt="half-star"
                      />
                      <span>201</span>
                    </div>
                    <footer>
                      <div className="popup-wrap click">
                        <div className="more-options btn popup-trigger">
                          <span className="icon"></span>
                        </div>
                        <div className="popup right card">
                          <form action="">
                            <div className="field">
                              <label>Size:</label>
                              <select name="size" className="sm">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                              </select>
                            </div>
                            <div className="field">
                              <label>Type:</label>
                              <select name="size" className="sm">
                                <option value="type-1">Type 1</option>
                                <option value="type-2">Type 2</option>
                              </select>
                            </div>
                            <button className="sm right">
                              <i className="fas fa-check"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <button>
                        <svg
                          className="left"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          ></path>
                        </svg>
                        Add
                      </button>
                    </footer>
                  </div>
                  <div className="item slide foot">
                    <figure>
                      <img
                        src="images/product-1-thumb.jpg"
                        alt="H.E.B Brown Sugar photo thumb"
                      />
                    </figure>
                    <h4>Hand & Shoulders Shampoo</h4>
                    <div className="specs">
                      Medium | Smoth & silky Anti-dandraff
                    </div>
                    <div className="price discounted">
                      <span>8$</span> - <span>6$</span>
                    </div>
                    <div className="rate">
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/half-star.svg"
                        style={{ width: "14px" }}
                        alt="half-star"
                      />
                      <span>201</span>
                    </div>
                    <footer>
                      <div className="popup-wrap click">
                        <div className="more-options btn popup-trigger">
                          <span className="icon"></span>
                        </div>
                        <div className="popup right card">
                          <form action="">
                            <div className="field">
                              <label>Size:</label>
                              <select name="size" className="sm">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                              </select>
                            </div>
                            <div className="field">
                              <label>Type:</label>
                              <select name="size" className="sm">
                                <option value="type-1">Type 1</option>
                                <option value="type-2">Type 2</option>
                              </select>
                            </div>
                            <button className="sm right">
                              <i className="fas fa-check"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <button>
                        <svg
                          className="left"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          ></path>
                        </svg>
                        Add
                      </button>
                    </footer>
                  </div>
                  <div className="item slide foot">
                    <figure>
                      <img
                        src="images/product-1-thumb.jpg"
                        alt="H.E.B Brown Sugar photo thumb"
                      />
                    </figure>
                    <h4>Hand & Shoulders Shampoo</h4>
                    <div className="specs">
                      Medium | Smoth & silky Anti-dandraff
                    </div>
                    <div className="price discounted">
                      <span>8$</span> - <span>6$</span>
                    </div>
                    <div className="rate">
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/half-star.svg"
                        style={{ width: "14px" }}
                        alt="half-star"
                      />
                      <span>201</span>
                    </div>
                    <footer>
                      <div className="popup-wrap click">
                        <div className="more-options btn popup-trigger">
                          <span className="icon"></span>
                        </div>
                        <div className="popup right card">
                          <form action="">
                            <div className="field">
                              <label>Size:</label>
                              <select name="size" className="sm">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                              </select>
                            </div>
                            <div className="field">
                              <label>Type:</label>
                              <select name="size" className="sm">
                                <option value="type-1">Type 1</option>
                                <option value="type-2">Type 2</option>
                              </select>
                            </div>
                            <button className="sm right">
                              <i className="fas fa-check"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <button>
                        <svg
                          className="left"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          ></path>
                        </svg>
                        Add
                      </button>
                    </footer>
                  </div>
                  <div className="item slide foot">
                    <figure>
                      <img
                        src="images/product-1-thumb.jpg"
                        alt="H.E.B Brown Sugar photo thumb"
                      />
                    </figure>
                    <h4>Hand & Shoulders Shampoo</h4>
                    <div className="specs">
                      Medium | Smoth & silky Anti-dandraff
                    </div>
                    <div className="price discounted">
                      <span>8$</span> - <span>6$</span>
                    </div>
                    <div className="rate">
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/half-star.svg"
                        style={{ width: "14px" }}
                        alt="half-star"
                      />
                      <span>201</span>
                    </div>
                    <footer>
                      <div className="popup-wrap click">
                        <div className="more-options btn popup-trigger">
                          <span className="icon"></span>
                        </div>
                        <div className="popup right card">
                          <form action="">
                            <div className="field">
                              <label>Size:</label>
                              <select name="size" className="sm">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                              </select>
                            </div>
                            <div className="field">
                              <label>Type:</label>
                              <select name="size" className="sm">
                                <option value="type-1">Type 1</option>
                                <option value="type-2">Type 2</option>
                              </select>
                            </div>
                            <button className="sm right">
                              <i className="fas fa-check"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <button>
                        <svg
                          className="left"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          ></path>
                        </svg>
                        Add
                      </button>
                    </footer>
                  </div>
                  <div className="item slide foot">
                    <figure>
                      <img
                        src="images/product-1-thumb.jpg"
                        alt="H.E.B Brown Sugar photo thumb"
                      />
                    </figure>
                    <h4>H.E.B Brown Sugar</h4>
                    <div className="specs">200g</div>
                    <div className="price discounted">
                      <span>8$</span> - <span>6$</span>
                    </div>
                    <div className="rate">
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/half-star.svg"
                        style={{ width: "14px" }}
                        alt="half-star"
                      />
                      <span>201</span>
                    </div>
                    <footer>
                      <div className="popup-wrap click">
                        <div className="more-options btn popup-trigger">
                          <span className="icon"></span>
                        </div>
                        <div className="popup right card">
                          <form action="">
                            <div className="field">
                              <label>Size:</label>
                              <select name="size" className="sm">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                              </select>
                            </div>
                            <div className="field">
                              <label>Type:</label>
                              <select name="size" className="sm">
                                <option value="type-1">Type 1</option>
                                <option value="type-2">Type 2</option>
                              </select>
                            </div>
                            <button className="sm right">
                              <i className="fas fa-check"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <button>
                        <svg
                          className="left"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          ></path>
                        </svg>
                        Add
                      </button>
                    </footer>
                  </div>
                  <div className="item slide foot">
                    <figure>
                      <img
                        src="images/product-1-thumb.jpg"
                        alt="H.E.B Brown Sugar photo thumb"
                      />
                    </figure>
                    <h4>Hand & Shoulders Shampoo</h4>
                    <div className="specs">
                      Medium | Smoth & silky Anti-dandraff
                    </div>
                    <div className="price discounted">
                      <span>8$</span> - <span>6$</span>
                    </div>
                    <div className="rate">
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/half-star.svg"
                        style={{ width: "14px" }}
                        alt="half-star"
                      />
                      <span>201</span>
                    </div>
                    <footer>
                      <div className="popup-wrap click">
                        <div className="more-options btn popup-trigger">
                          <span className="icon"></span>
                        </div>
                        <div className="popup right card">
                          <form action="">
                            <div className="field">
                              <label>Size:</label>
                              <select name="size" className="sm">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                              </select>
                            </div>
                            <div className="field">
                              <label>Type:</label>
                              <select name="size" className="sm">
                                <option value="type-1">Type 1</option>
                                <option value="type-2">Type 2</option>
                              </select>
                            </div>
                            <button className="sm right">
                              <i className="fas fa-check"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <button>
                        <svg
                          className="left"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          ></path>
                        </svg>
                        Add
                      </button>
                    </footer>
                  </div>
                  <div className="item slide foot">
                    <figure>
                      <img
                        src="images/product-1-thumb.jpg"
                        alt="H.E.B Brown Sugar photo thumb"
                      />
                    </figure>
                    <h4>Hand & Shoulders Shampoo</h4>
                    <div className="specs">
                      Medium | Smoth & silky Anti-dandraff
                    </div>
                    <div className="price discounted">
                      <span>8$</span> - <span>6$</span>
                    </div>
                    <div className="rate">
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/half-star.svg"
                        style={{ width: "14px" }}
                        alt="half-star"
                      />
                      <span>201</span>
                    </div>
                    <footer>
                      <div className="popup-wrap click">
                        <div className="more-options btn popup-trigger">
                          <span className="icon"></span>
                        </div>
                        <div className="popup right card">
                          <form action="">
                            <div className="field">
                              <label>Size:</label>
                              <select name="size" className="sm">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                              </select>
                            </div>
                            <div className="field">
                              <label>Type:</label>
                              <select name="size" className="sm">
                                <option value="type-1">Type 1</option>
                                <option value="type-2">Type 2</option>
                              </select>
                            </div>
                            <button className="sm right">
                              <i className="fas fa-check"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <button>
                        <svg
                          className="left"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          ></path>
                        </svg>
                        Add
                      </button>
                    </footer>
                  </div>
                  <div className="item slide foot">
                    <figure>
                      <img
                        src="images/product-1-thumb.jpg"
                        alt="H.E.B Brown Sugar photo thumb"
                      />
                    </figure>
                    <h4>Hand & Shoulders Shampoo</h4>
                    <div className="specs">
                      Medium | Smoth & silky Anti-dandraff
                    </div>
                    <div className="price discounted">
                      <span>8$</span> - <span>6$</span>
                    </div>
                    <div className="rate">
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/star.svg"
                        style={{ width: "14px" }}
                        alt="star"
                      />
                      <img
                        src="images/half-star.svg"
                        style={{ width: "14px" }}
                        alt="half-star"
                      />
                      <span>201</span>
                    </div>
                    <footer>
                      <div className="popup-wrap click">
                        <div className="more-options btn popup-trigger">
                          <span className="icon"></span>
                        </div>
                        <div className="popup right card">
                          <form action="">
                            <div className="field">
                              <label>Size:</label>
                              <select name="size" className="sm">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                              </select>
                            </div>
                            <div className="field">
                              <label>Type:</label>
                              <select name="size" className="sm">
                                <option value="type-1">Type 1</option>
                                <option value="type-2">Type 2</option>
                              </select>
                            </div>
                            <button className="sm right">
                              <i className="fas fa-check"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <button>
                        <svg
                          className="left"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                          ></path>
                        </svg>
                        Add
                      </button>
                    </footer>
                  </div>
                </div>
              </div>
              <nav>
                <div onClick={(e) => leftSide(e)} className="left ">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div onClick={(e) => rightSide(e)} className="right">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
