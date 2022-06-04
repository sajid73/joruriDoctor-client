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
      <Container sx={{ display: "flex", textAlign: "justify" }}>
        <Container>
          <Typography variant="h4" color="initial">
            Mission
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            repudiandae eos excepturi incidunt enim delectus temporibus
            laudantium consectetur molestias error nobis, earum aperiam quidem
            nam. Necessitatibus maiores neque ratione nobis architecto ullam
            dolorem veritatis praesentium placeat possimus totam consequuntur
            similique recusandae beatae autem in voluptatum numquam pariatur
            labore deserunt sit, sequi exercitationem quis ad. Vel dicta
            reiciendis similique beatae eum vero. Iusto tempora modi cum
            aperiam, error alias corrupti repudiandae velit blanditiis nisi non
            minima totam nihil vitae nostrum rem? Excepturi aut at hic earum
            facere vero esse? Aspernatur maxime quaerat ratione deleniti
            dignissimos, dicta, excepturi explicabo ut beatae perspiciatis ex
            omnis quis, ea non quos porro quibusdam minus hic totam culpa quasi.
            Itaque, eos molestiae necessitatibus dignissimos animi, accusantium
            maiores vel dolore tenetur voluptate harum fuga voluptas ducimus
            error quaerat eum repellat voluptatum aliquam explicabo natus
            voluptatem nesciunt aliquid nulla provident. Quisquam voluptatem ad
            eaque nesciunt vero odit, velit corrupti quod esse. Accusantium
            debitis nemo eligendi adipisci! Perferendis, temporibus magnam
            dolorum est vel voluptates consequatur et hic optio suscipit facere
            mollitia sunt libero eveniet distinctio qui? Sapiente iure alias
            pariatur? Distinctio illo harum adipisci voluptates recusandae iure
            beatae animi architecto veritatis ipsam perferendis quos libero,
            quisquam sapiente eligendi reprehenderit!
          </p>
        </Container>
        <Container>
          <Typography variant="h4" color="initial">
            Vission
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            repudiandae eos excepturi incidunt enim delectus temporibus
            laudantium consectetur molestias error nobis, earum aperiam quidem
            nam. Necessitatibus maiores neque ratione nobis architecto ullam
            dolorem veritatis praesentium placeat possimus totam consequuntur
            similique recusandae beatae autem in voluptatum numquam pariatur
            labore deserunt sit, sequi exercitationem quis ad. Vel dicta
            reiciendis similique beatae eum vero. Iusto tempora modi cum
            aperiam, error alias corrupti repudiandae velit blanditiis nisi non
            minima totam nihil vitae nostrum rem? Excepturi aut at hic earum
            facere vero esse? Aspernatur maxime quaerat ratione deleniti
            dignissimos, dicta, excepturi explicabo ut beatae perspiciatis ex
            omnis quis, ea non quos porro quibusdam minus hic totam culpa quasi.
            Itaque, eos molestiae necessitatibus dignissimos animi, accusantium
            maiores vel dolore tenetur voluptate harum fuga voluptas ducimus
            error quaerat eum repellat voluptatum aliquam explicabo natus
            voluptatem nesciunt aliquid nulla provident. Quisquam voluptatem ad
            eaque nesciunt vero odit, velit corrupti quod esse. Accusantium
            debitis nemo eligendi adipisci! Perferendis, temporibus magnam
            dolorum est vel voluptates consequatur et hic optio suscipit facere
            mollitia sunt libero eveniet distinctio qui? Sapiente iure alias
            pariatur? Distinctio illo harum adipisci voluptates recusandae iure
            beatae animi architecto veritatis ipsam perferendis quos libero,
            quisquam sapiente eligendi reprehenderit!
          </p>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
