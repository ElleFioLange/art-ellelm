import Mailjet from "node-mailjet";

export const runtime = "edge";

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC || "",
  process.env.MJ_APIKEY_PRIVATE || ""
);

export type Req = {
  svg: string;
  png: string;
};

export async function POST(req: Request) {
  try {
    const { png } = (await req.json()) as Req;
    const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(
      ","
    )[0];

    const resp = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "elle.fio.lange@gmail.com",
          },
          To: [
            {
              Email: "elle.fio.lange@gmail.com",
            },
          ],
          Subject: "New contact from art website",
          TextPart: `IP Address: ${ip}`,
          InlinedAttachments: [
            {
              ContentType: "image/png",
              Filename: "message.png",
              ContentID: "png",
              Base64Content: png,
            },
          ],
        },
      ],
    });

    return Response.json(resp, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json(err, { status: 500 });
  }
}
