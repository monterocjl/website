import { Client } from "@notionhq/client";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  try {
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    // Run cors
    await cors(req, res);

    // Get data submitted in request's body.
    const body = req.body;
    const new_lead = {
      parent: {
        database_id: process.env.NOTION_LEADS_DATABASE_ID,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: body.identifier ? body.identifier : "",
              },
            },
          ],
        },
        Service: {
          rich_text: [
            {
              text: {
                content: body.product ? body.product : "",
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: body.message ? body.message : "",
              },
            },
          ],
        },
      },
    };

    await notion.pages.create(new_lead);

    res.writeHead(301, {
      Location: "/",
    });
    res.end();
  } catch (error) {
    console.log(error);
  }
}
