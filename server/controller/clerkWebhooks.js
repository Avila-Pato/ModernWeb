import { Webhook } from "svix";
import  User  from "../models/User.js";

const clerkWebhooks = async (req, res) => {
    try {
        const hook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        }
        await Webhook.verify(JSON.stringify(req, body), headers)

        const {data, type} = req.body;

        switch(type){
            case "user.created":
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    username: data.first_name + " " + data.last_name,
                    image: data.image_url,
                    role: data.public_metadata.role
                }
                await User.create(userData);
                break;
        }

         switch(type){
            case "user.updated":
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    username: data.first_name + " " + data.last_name,
                    image: data.image_url,
                    role: data.public_metadata.role
                }
                await User.findByIdAndUpdate(data.id, userData);
                break;
        }

         switch(type){
            case "user.deleted":
                await User.findByIdAndDelete(data.id);
                break;
        }
        res.json({success: true, message: "Webhook received successfully"})

    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: "Webhook received failed"})
    }
}

export default clerkWebhooks;