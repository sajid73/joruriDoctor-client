import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About - Joruri Doctor";
  }, []);
  return (
    <Container>
      <Typography variant="h3" color="#0091CD" sx={{ fontWeight: "regular" }}>
        About us
      </Typography>
      <Container sx={{display: 'flex', textAlign: 'justify'}}>
        <Container>
          <Typography variant="h4" color="initial">
            Mission
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam
            doloribus, expedita ratione est aspernatur deleniti earum fugit
            aperiam placeat. Id, natus consequuntur omnis aspernatur architecto
            in dicta excepturi. Et a quisquam possimus vel rerum. Velit quisquam
            similique qui recusandae enim illum, voluptatem nesciunt,
            repudiandae ducimus rem temporibus ea provident illo. Minus labore,
            doloribus quae corporis atque eos sint a repudiandae quos eaque hic
            voluptatibus explicabo, quam ab vel deserunt vitae quo, earum
            pariatur itaque eveniet. Laboriosam eligendi nulla quidem maiores
            corporis beatae provident, dolorum eaque cum doloremque aspernatur
            magni ex ea iste fugiat neque illo sed, odio aut, asperiores
            corrupti deleniti repudiandae. Consequuntur debitis ad quibusdam
            minima totam obcaecati ex molestias quaerat! Eum corporis magni
            aperiam consequuntur esse aliquid, veniam alias mollitia rem quis
            beatae quas vitae harum aspernatur. Quaerat ullam explicabo, dolorum
            fugit voluptatem at? Atque excepturi, non commodi totam deserunt
            expedita itaque consequuntur illum recusandae nam consectetur
            voluptatem minus debitis fugiat quidem molestiae iure nemo dolor
            vitae aspernatur ratione voluptatum accusantium? Ex alias magni
            officiis quis distinctio, ipsam totam veritatis molestias
            consectetur numquam repudiandae sequi, quos, dolores ipsa unde nisi
            nulla quaerat odio quae nobis possimus. Iste similique vitae tempore
            alias nobis praesentium recusandae aut facilis quo. Deleniti ipsa
            provident commodi. Dolorum deserunt eius veniam assumenda sunt animi
            quaerat! Molestias, quasi. Vel aperiam tenetur reiciendis quisquam
            voluptatibus facilis fuga aspernatur dolorem totam cupiditate
            temporibus aliquam iure modi id ut numquam praesentium provident
            voluptates repellat non mollitia, vero sapiente. Impedit deserunt
            autem mollitia maiores, architecto assumenda, at, dolorem recusandae
            ab pariatur officia nemo enim eius. Pariatur molestiae magnam
            dolorem, velit nihil quis temporibus iusto eveniet minus laborum eum
            facilis suscipit architecto et accusamus ipsum dolorum possimus quam
            beatae! Eveniet adipisci dignissimos cum modi. Fugiat eveniet
            debitis illo iure tenetur exercitationem aspernatur praesentium
            voluptatibus quibusdam vel accusamus, molestiae ratione?
          </p>
        </Container>
        <Container>
          <Typography variant="h4" color="initial">
            Vission
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam
            doloribus, expedita ratione est aspernatur deleniti earum fugit
            aperiam placeat. Id, natus consequuntur omnis aspernatur architecto
            in dicta excepturi. Et a quisquam possimus vel rerum. Velit quisquam
            similique qui recusandae enim illum, voluptatem nesciunt,
            repudiandae ducimus rem temporibus ea provident illo. Minus labore,
            doloribus quae corporis atque eos sint a repudiandae quos eaque hic
            voluptatibus explicabo, quam ab vel deserunt vitae quo, earum
            pariatur itaque eveniet. Laboriosam eligendi nulla quidem maiores
            corporis beatae provident, dolorum eaque cum doloremque aspernatur
            magni ex ea iste fugiat neque illo sed, odio aut, asperiores
            corrupti deleniti repudiandae. Consequuntur debitis ad quibusdam
            minima totam obcaecati ex molestias quaerat! Eum corporis magni
            aperiam consequuntur esse aliquid, veniam alias mollitia rem quis
            beatae quas vitae harum aspernatur. Quaerat ullam explicabo, dolorum
            fugit voluptatem at? Atque excepturi, non commodi totam deserunt
            expedita itaque consequuntur illum recusandae nam consectetur
            voluptatem minus debitis fugiat quidem molestiae iure nemo dolor
            vitae aspernatur ratione voluptatum accusantium? Ex alias magni
            officiis quis distinctio, ipsam totam veritatis molestias
            consectetur numquam repudiandae sequi, quos, dolores ipsa unde nisi
            nulla quaerat odio quae nobis possimus. Iste similique vitae tempore
            alias nobis praesentium recusandae aut facilis quo. Deleniti ipsa
            provident commodi. Dolorum deserunt eius veniam assumenda sunt animi
            quaerat! Molestias, quasi. Vel aperiam tenetur reiciendis quisquam
            voluptatibus facilis fuga aspernatur dolorem totam cupiditate
            temporibus aliquam iure modi id ut numquam praesentium provident
            voluptates repellat non mollitia, vero sapiente. Impedit deserunt
            autem mollitia maiores, architecto assumenda, at, dolorem recusandae
            ab pariatur officia nemo enim eius. Pariatur molestiae magnam
            dolorem, velit nihil quis temporibus iusto eveniet minus laborum eum
            facilis suscipit architecto et accusamus ipsum dolorum possimus quam
            beatae! Eveniet adipisci dignissimos cum modi. Fugiat eveniet
            debitis illo iure tenetur exercitationem aspernatur praesentium
            voluptatibus quibusdam vel accusamus, molestiae ratione?
          </p>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
