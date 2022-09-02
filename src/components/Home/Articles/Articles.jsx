import { Container, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { blogList } from "../../../api";
import SingleArticle from "./SingleArticle";

const Articles = () => {
  const [articles, setArticles] = useState();
  const loadArticles = async () => {
    const res = await blogList();
    setArticles(res);
  }
  useEffect(() => {
    loadArticles();
  }, [])


  return (
    <Container
      sx={{
        my: 10,
      }}
    >
      <Stack direction="column" spacing={3}>
        {/* <span>OUR BLOG</span> */}
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
            {articles ? articles.map((article) => (
              <Grid item={true} key={article.id} xs={2} sm={4} md={4}>
                <SingleArticle data={article} />
              </Grid>
            )) : (<Grid container wrap='nowrap' gap={2}>
              {
                Array.from(new Array(3)).map((id, _id) => ((
                  <Box key={_id} sx={{ width: 345, marginRight: 0.5, my: 5 }}>
                    <Skeleton variant="rectangular" width={345} height={200} />
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>)))
              }
            </Grid>)}
          </Grid>
        </Container>
      </Stack>
    </Container>
  );
};

export default Articles;
