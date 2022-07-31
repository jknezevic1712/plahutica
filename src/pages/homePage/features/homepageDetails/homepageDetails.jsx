import React from "react";

const HomepageDetails = ({ backgroundNumber }) => {
  const blogDescriptionObject = [
    { title: "Thailand", description: "Thailaaaaaaaaaaaaaaaaaaaaaaaaaaaand!" },
    { title: "Hungary", description: "Hungaaaaaaaaaaryyyyyyyyyyyy!" },
    { title: "Pula", description: "Puuuuuulaaaaaaaaaaaa!" },
    { title: "BiH", description: "Bosniaaaaaaaaaaaaaaaa!" },
    { title: "Spain", description: "Spaaaaaaaaaaaaaiiiiiiiin!" },
  ];

  return (
    <div className="homepage-blog_details">
      {blogDescriptionObject.map((value, key) => {
        if (backgroundNumber === key)
          return (
            <div className="homepage-blog_details-content" key={key}>
              <h1>{value.title}</h1>
              <p>{value.description}</p>
              <a className="link_as_button" href="/blog">
                Read more...
              </a>
            </div>
          );
        return null;
      })}
    </div>
  );
};

export default HomepageDetails;
