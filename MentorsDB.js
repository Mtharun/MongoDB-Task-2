//database
use("GuviTask");

//createCollection
db.createCollection("mentors");

//insertMany
db.mentors.insertMany([
    {
      mentorId: 1,
      mentorName: "sathish",
      mentorEmail: "sathish@gmail.com",
    },
    {
      mentorId: 2,
      mentorName: "naga",
      mentorEmail: "naga@gmail.com",
    },
    {
      mentorId: 3,
      mentorName: "rupan",
      mentorEmail: "rupan@gmail.com",
    },
    {
      mentorId: 4,
      mentorName: "aktar",
      mentorEmail: "minato@gmail.com",
    },
  ]);