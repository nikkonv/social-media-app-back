// just for reference how is the db structure

let db = {
  users: [
    {
      userId: "gh43f53hg4f5h43",
      email: "user@email.com",
      handle: "user",
      createdAt: "2020-04-15T23:03:41.630Z",
      imageUrl: "image/jsufug/jksl",
      bio: "Hello to everyone xD",
      website: "https://user.com",
      location: "Talca, Chile",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "scream body",
      createdAt: "2020-04-15T23:03:41.630Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "kujshf7df6dgfd8",
      body: "cheers!",
      createdAt: "2020-04-15T23:03:41.630Z",
    },
  ],
  notifications: {
    recipient: "user",
    sender: "john",
    read: "true or false",
    screamId: "kujshf7df6dgfd8",
    type: "like or comment",
    createdAt: "2020-04-15T23:03:41.630Z",
  },
};

const userDetails = {
  // redux
  credentials: {
    userId: "SDJHSD87SJDS7SDS6",
    email: "user@email.com",
    handle: "user",
    createdAt: "2020-04-15T23:03:41.630Z",
    imageUrl: "image/jsufug/jksl",
    bio: "Hello to everyone xD",
    website: "https://user.com",
    location: "Talca, Chile",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "dgfgdf675dfgdf5g",
    },
    {
      userHandle: "user",
      screamId: "dyyffgh567fdfg53",
    },
  ],
};
