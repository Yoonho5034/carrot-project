// import client from "@/libs/client";

import client from "@/libs/client";

// export default async function handler(req, res) {
//   await client.user.create({
//     data: {
//       email: "123@naver.com",
//       name: "test",
//     },
//   });
//   res.json({
//     ok: true,
//   });
// }

export default async function handler(req, res) {
  await client.user.create({ data: { email: "h1323@naver.com", name: "hi" } });
  res.json({
    ok: true,
    data: "xx",
  });
}
