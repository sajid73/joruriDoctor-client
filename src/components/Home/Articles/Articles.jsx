import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { articlesData } from "../../DemoData/HomeData";
import SingleArticle from "./SingleArticle";

const Articles = () => {
  // blogList();

  return (
    <Container
      sx={{
        my: 10,
      }}
    >
      <Stack direction="column" spacing={3}>
        <span>OUR BLOG</span>
        <Typography variant="h3" fontWeight={700}>
          Recent Articles and News
        </Typography>
        <Typography variant="body1" align="justify" maxWidth={850}>
          Since its founding JoruriDoctor has been providing its patients with
          the full medical care, encompassing outpatients services, is
          neurology, laboratory, imaging diagnostics and more.
        </Typography>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 0 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {articlesData.map((article) => (
              <Grid item={true} xs={2} sm={4} md={4}>
                <SingleArticle key={article.id} data={article} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Container>
  );
};

export default Articles;
