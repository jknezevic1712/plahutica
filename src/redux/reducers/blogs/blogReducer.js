import { createReducer } from "@reduxjs/toolkit";

import { blogsInitialDataLoad } from "../../actions/blogs/blogActions";

import { istria_road_trip } from "../../../assets/blogs/istria_road_trip";

const initialState = {
  data: [
    {
      overview: istria_road_trip.overview,
      content: istria_road_trip.content,
    },
    {
      overview: {
        title: "California, United States of America",
        description: "Blog describing a journey through California!",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, perferendis aut velit, incidunt veritatis cupiditate aliquam nostrum iure accusamus assumenda provident voluptatum illum doloremque porro voluptatem id optio amet repellat dolores, ea quo? Nisi accusantium quisquam suscipit. Quidem, tenetur dolorum maiores amet sit blanditiis voluptatem corrupti natus incidunt nemo error ad fugit dolores provident id molestiae quasi consequatur cumque! Ratione quod, vero dolor recusandae laborum, laudantium dolores unde hic, quos facere odit saepe magnam animi accusantium corporis! Inventore vel odio ea atque adipisci explicabo a accusamus perspiciatis distinctio, officiis eum tempore quae sit aut labore consequuntur voluptatem delectus impedit, eligendi quam expedita amet odit quibusdam? Beatae fugiat aperiam a ullam voluptates provident dolores ipsum ex natus itaque iste impedit magnam veritatis necessitatibus minima voluptatibus fuga, debitis inventore est nihil ducimus laboriosam obcaecati error. Odit pariatur accusamus harum incidunt non nostrum veniam ullam possimus, laboriosam est id ex quas a at sunt, labore aspernatur modi commodi cumque officiis assumenda quisquam quis libero molestiae? Ab, cupiditate rerum iure tempora deserunt recusandae earum rem iusto fugiat, amet quam aliquam veniam molestias perferendis doloribus ex ut ad sequi animi tenetur dolore! Repudiandae, consequatur ipsum est omnis atque quidem aut odit laborum qui dignissimos.",
    },
    {
      overview: {
        title: "Sarajevo, Bosnia and Herzegovina",
        description: "Blog describing an excursion in Sarajevo!",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, perferendis aut velit, incidunt veritatis cupiditate aliquam nostrum iure accusamus assumenda provident voluptatum illum doloremque porro voluptatem id optio amet repellat dolores, ea quo? Nisi accusantium quisquam suscipit. Quidem, tenetur dolorum maiores amet sit blanditiis voluptatem corrupti natus incidunt nemo error ad fugit dolores provident id molestiae quasi consequatur cumque! Ratione quod, vero dolor recusandae laborum, laudantium dolores unde hic, quos facere odit saepe magnam animi accusantium corporis! Inventore vel odio ea atque adipisci explicabo a accusamus perspiciatis distinctio, officiis eum tempore quae sit aut labore consequuntur voluptatem delectus impedit, eligendi quam expedita amet odit quibusdam? Beatae fugiat aperiam a ullam voluptates provident dolores ipsum ex natus itaque iste impedit magnam veritatis necessitatibus minima voluptatibus fuga, debitis inventore est nihil ducimus laboriosam obcaecati error. Odit pariatur accusamus harum incidunt non nostrum veniam ullam possimus, laboriosam est id ex quas a at sunt, labore aspernatur modi commodi cumque officiis assumenda quisquam quis libero molestiae? Ab, cupiditate rerum iure tempora deserunt recusandae earum rem iusto fugiat, amet quam aliquam veniam molestias perferendis doloribus ex ut ad sequi animi tenetur dolore! Repudiandae, consequatur ipsum est omnis atque quidem aut odit laborum qui dignissimos.",
    },
    {
      overview: {
        title: "Krk island in Croatia",
        description:
          "Blog describing a summer vacation on Krk island in Croatia!",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, perferendis aut velit, incidunt veritatis cupiditate aliquam nostrum iure accusamus assumenda provident voluptatum illum doloremque porro voluptatem id optio amet repellat dolores, ea quo? Nisi accusantium quisquam suscipit. Quidem, tenetur dolorum maiores amet sit blanditiis voluptatem corrupti natus incidunt nemo error ad fugit dolores provident id molestiae quasi consequatur cumque! Ratione quod, vero dolor recusandae laborum, laudantium dolores unde hic, quos facere odit saepe magnam animi accusantium corporis! Inventore vel odio ea atque adipisci explicabo a accusamus perspiciatis distinctio, officiis eum tempore quae sit aut labore consequuntur voluptatem delectus impedit, eligendi quam expedita amet odit quibusdam? Beatae fugiat aperiam a ullam voluptates provident dolores ipsum ex natus itaque iste impedit magnam veritatis necessitatibus minima voluptatibus fuga, debitis inventore est nihil ducimus laboriosam obcaecati error. Odit pariatur accusamus harum incidunt non nostrum veniam ullam possimus, laboriosam est id ex quas a at sunt, labore aspernatur modi commodi cumque officiis assumenda quisquam quis libero molestiae? Ab, cupiditate rerum iure tempora deserunt recusandae earum rem iusto fugiat, amet quam aliquam veniam molestias perferendis doloribus ex ut ad sequi animi tenetur dolore! Repudiandae, consequatur ipsum est omnis atque quidem aut odit laborum qui dignissimos.",
    },
    {
      overview: {
        title: "Rome, Italy",
        description: "Blog describing a wonderful three-day excursion in Rome!",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, perferendis aut velit, incidunt veritatis cupiditate aliquam nostrum iure accusamus assumenda provident voluptatum illum doloremque porro voluptatem id optio amet repellat dolores, ea quo? Nisi accusantium quisquam suscipit. Quidem, tenetur dolorum maiores amet sit blanditiis voluptatem corrupti natus incidunt nemo error ad fugit dolores provident id molestiae quasi consequatur cumque! Ratione quod, vero dolor recusandae laborum, laudantium dolores unde hic, quos facere odit saepe magnam animi accusantium corporis! Inventore vel odio ea atque adipisci explicabo a accusamus perspiciatis distinctio, officiis eum tempore quae sit aut labore consequuntur voluptatem delectus impedit, eligendi quam expedita amet odit quibusdam? Beatae fugiat aperiam a ullam voluptates provident dolores ipsum ex natus itaque iste impedit magnam veritatis necessitatibus minima voluptatibus fuga, debitis inventore est nihil ducimus laboriosam obcaecati error. Odit pariatur accusamus harum incidunt non nostrum veniam ullam possimus, laboriosam est id ex quas a at sunt, labore aspernatur modi commodi cumque officiis assumenda quisquam quis libero molestiae? Ab, cupiditate rerum iure tempora deserunt recusandae earum rem iusto fugiat, amet quam aliquam veniam molestias perferendis doloribus ex ut ad sequi animi tenetur dolore! Repudiandae, consequatur ipsum est omnis atque quidem aut odit laborum qui dignissimos.",
    },
  ],
};

const blogReducer = createReducer(initialState, (builder) => {
  builder.addCase(blogsInitialDataLoad, () => {
    return { ...initialState };
  });
});

export default blogReducer;
