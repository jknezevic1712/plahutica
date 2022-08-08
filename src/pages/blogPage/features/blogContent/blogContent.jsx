import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogContent = () => {
  const { activeBlogId } = useParams();
  const activeBlogContent = useSelector(
    (state) => state.blogs.data[activeBlogId].content
  );

  return (
    <div className="blog_container">
      {Object.entries(activeBlogContent).map((first_level_value, id) => {
        switch (first_level_value[0]) {
          case "restaurantsAndBars":
            return (
              <div className="blog_container-card">
                <div className="blog_container-card_content">
                  <h2>Restorani</h2>
                  {Object.entries(first_level_value[1]).map(
                    (second_level_value, id) => (
                      <div className="blog_container-card_content-inner">
                        <h3>{second_level_value[0]}</h3>
                        <p>{second_level_value[1]}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            );

          case "beaches":
            return (
              <div className="blog_container-card">
                <div className="blog_container-card_content">
                  <h2>Plaže</h2>
                  {Object.entries(first_level_value[1]).map(
                    (second_level_value, id) => (
                      <div className="blog_container-card_content-inner">
                        <h3>{second_level_value[0]}</h3>
                        <p>{second_level_value[1]}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            );

          case "sights":
            return (
              <div className="blog_container-card">
                <div className="blog_container-card_content">
                  <h2>Znamenitosti</h2>
                  {Object.entries(first_level_value[1]).map(
                    (second_level_value, id) => (
                      <div className="blog_container-card_content-inner">
                        <h3>{second_level_value[0]}</h3>
                        <p>{second_level_value[1]}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            );

          case "excursions":
            return (
              <div className="blog_container-card">
                <div className="blog_container-card_content">
                  <h2>Izleti</h2>
                  {Object.entries(first_level_value[1]).map(
                    (second_level_value, id) => {
                      return (
                        <div className="blog_container-card_content-excursions">
                          <h3>{second_level_value[0]}</h3>
                          {Object.entries(second_level_value[1]).map(
                            (third_level_value, id) =>
                              Object.entries(third_level_value[1]).map(
                                (fourth_level_value, id) => (
                                  <div className="blog_container-card_content-excursions-inner">
                                    <h4>{fourth_level_value[0]}</h4>
                                    {typeof fourth_level_value[1] ===
                                    "object" ? (
                                      Object.entries(fourth_level_value[1]).map(
                                        (fifth_level_value, id) => (
                                          <div className="blog_container-card_content-excursions-inner_content">
                                            <h5>{fifth_level_value[0]}</h5>
                                            <p>{fifth_level_value[1]}</p>
                                          </div>
                                        )
                                      )
                                    ) : (
                                      <p>{fourth_level_value[1]}</p>
                                    )}
                                  </div>
                                )
                              )
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );

          default:
            return Object.entries(first_level_value[1]).map((data, id) => {
              return (
                <div className="blog_container-card">
                  <div className="blog_container-card_content">
                    <h2>{data[0]}</h2>
                    {/* <div className="blog_container-card_content-inner">
                    <h3>{data[0]}</h3> */}
                    <p>{data[1]}</p>
                    {/* </div> */}
                  </div>
                </div>
              );
            });
        }
      })}
    </div>
  );
};

export default BlogContent;
