
2. npx prisma db push

--> after you have created models
--> also check the database

--> diff between pisma migrate dev

3. npx prisma studio

--> give you a localhost:5555 to visualize the data stored in the db

4. how to extract things from url in next js from client slide

    --> post
        --> [id] //dynamic value
            --> page.tsx
                --> race async ({param}) 
                --> clg(params) => {id : 'lskadjflksjf'}

    --> post
        --> [slug] //dynamic value // ye thoda naming imp hai nahi to bug aayega
            --> page.tsx
                --> race async ({param}) 
                --> clg(params) ==> {slag: 'laskdflskadjf'}

5. ek badi jabar jast baat pata chali
    1. form me actions ke madad se ek method call kar sakte hai
    2. aur usse se form ko link kar sakte hai.`
    3. see page.tsx and action.ts how they are linked


6. 
    ```
        const user2 = await prisma.user.findUnique({
            where: {
            email: "gigagiga@gmail.com",
            },
            include: {
            posts: true
            }
        });
    ```
    Yaha pe user2 ko get karne ke liye where use karna padega
    if you want to get posts from the user then include me posts --> true

7. 
    In the case aap post karna chahte ho


    ```
        await prisma.post.create({
        data: {
        title: formData.get("title") as string,
        slug: (formData.get("title") as string)
            .replace("/s+/g", "-")
            .toLowerCase(),
        content: formData.get("content") as string,
        //important ishe dekhiye ishe add karna hoga 
        //in the case aap kisi post ko user ke saath link karna chahte ho
        ho sakta hai id se kare ya email se ya koi aur third party service se
        author: {
            connect: {
            email: "gigagiga@gmail.com",
            },
        }, // Add the 'author' property here
        },
    });
    revalidatePath("/posts");
    ```

8. 
    --> migration
        1. npx primsa migrate dev
        2. npx prisma db seed for adding data from seed.ts
        3. npx prisma db push for pushing changes and data to the db
        4. scripts: {
            postinstall : "prisma generate && prisma migrate deploy"
            --> prisma generate for adding required prisma modules as in production there is no node modules
            
        }
