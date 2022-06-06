router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { user_name, email, comment } = req.body;

  const _comment = {
    comment: {
      user_name,
      email,
      comment,
    },
  };

  try {
    const addComment = await Movie.findOne({id,});

    // (err, docs) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       Movie.updateOne(
    //         {
    //           _id: id,
    //         },
    //         {
    //           $set: {
    //             _comment,
    //           },
    //         },
    //         (err, docs) => {
    //           if (err) console.log(err);
    //         }
    //       );
          
    //     }
    //   }

    // await Movie.create(movie);

    res.status(201).json({ message: "Comment added to Movie" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
