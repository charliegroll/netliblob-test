import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const things = getStore("things");
  await things.set("stuff", "This is stuff");

  const more = getStore("more");
  await more.setJSON(
    "less",
    { desc: "Wait, why?" },
    {
      metadata: { much: "not", sad: true },
    }
  );

  await things.set("nested/thing/here", "This be nested thing");

  return new Response("Blobby blobs set for things and more stores");
};
