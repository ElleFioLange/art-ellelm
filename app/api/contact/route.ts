import Mailjet from "node-mailjet";

export const runtime = "edge";

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC || "",
  process.env.MJ_APIKEY_PRIVATE || ""
);

export type Req = {
  png: string;
  email: string;
};

export async function POST(req: Request) {
  try {
    const { png, email } = (await req.json()) as Req;

    await mailjet.post("send", { version: "v3.1" }).request({
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
          TextPart: `Email: ${email}`,
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

    return Response.json("success", { status: 200 });
  } catch (err) {
    // Add error logging later
    return Response.json("error", { status: 500 });
  }
}
