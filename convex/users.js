import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        pictureURL: v.string()
    },
    handler:async(ctx,args)=>{
        // if the user already exists or not?
       
        const user = await ctx.db.query('users').filter(q => q.eq(q.field('email'),args.email)).collect();
        const userdata = {
            name: args?.name,
            email: args?.email,
            pictureURL: args?.pictureURL
        }

        if(!user[0]?.email){
            const result = await ctx.db.insert('users', userdata);
            return result;
        }
        return user[0];
    }
})