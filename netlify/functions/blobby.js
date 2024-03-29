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
  await things.set("nested/thing/there", "Arrrr here another nested thing");
  await things.set("nested/thing/everywhere", "MULTI BALL");
  await things.set("more-nests/dir", "hur");

  const empty = getStore("empty");
  await empty.set("emptiness", "This is not empty");
  await empty.delete("emptiness");

  const long = getStore(
    "really-long-name-for-a-store-really-long-name-for-a-store-real"
  );
  await long.set("long", "This is long");

  return new Response("Blobby blobs set for things and more stores");
};
