import React from "react";
import Blogbutton from "./blogbutton";
import Link from "next/link";
// const bloglist = [
//   {
//     blogimg: "/images/1.png",
//     blogtext:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     btntext: "Technology",
//   },
//   {
//     blogimg: "/images/2.png",
//     blogtext:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     btntext: "Design",
//   },
//   {
//     blogimg: "/images/3.png",
//     blogtext:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     btntext: "Technology",
//   },
//   {
//     blogimg: "/images/4.png",
//     blogtext:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     btntext: "Technology",
//   },
//   {
//     blogimg: "/images/5.png",
//     blogtext:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     btntext: "TSoftware",
//   },
//   {
//     blogimg: "/images/6.png",
//     blogtext:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     btntext: "Technology",
//   },
//   {
//     blogimg: "/images/7.png",
//     blogtext:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     btntext: "Technology",
//   },
//   {
//     blogimg: "/images/8.png",
//     blogtext:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     btntext: "Technology",
//   },
//   {
//     blogimg: "/images/9.png",
//     blogtext:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     btntext: "Technology",
//   },
// ];
const Blogpostcard = ({ bloglist }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {bloglist.map(
        ({ social_image, type_of, title, readable_publish_date, id }) => (
          <Link href={"/blog/" + id}>
            <div className="border border-gray-200 rounded-xl p-4 flex flex-col gap-4 items-start ">
              <img src={social_image} alt="" />
              <Blogbutton text={type_of} />
              <p>{title}</p>
              <p>{readable_publish_date}</p>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Blogpostcard;
// canonical_url
// :
// "https://dev.to/mediocredevops/crowdstrike-brings-down-windows-pcs-5fnm"
// collection_id
// :
// null
// comments_count
// :
// 1
// cover_image
// :
// "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqg9981md0yqbcpj16mrx.png"
// created_at
// :
// "2024-07-19T08:57:47Z"
// crossposted_at
// :
// null
// description
// :
// "From the trenches of Twitter, I found out that windows has once again faced a global outage causing..."
// edited_at
// :
// null
// id
// :
// 1928765
// last_comment_at
// :
// "2024-07-19T14:21:28Z"
// path
// :
// "/mediocredevops/crowdstrike-brings-down-windows-pcs-5fnm"
// positive_reactions_count
// :
// 6
// public_reactions_count
// :
// 6
// published_at
// :
// "2024-07-19T08:57:46Z"
// published_timestamp
// :
// "2024-07-19T08:57:46Z"
// readable_publish_date
// :
// "Jul 19"
// reading_time_minutes
// :
// 1
// slug
// :
// "crowdstrike-brings-down-windows-pcs-5fnm"
// social_image
// :
// "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqg9981md0yqbcpj16mrx.png"
// tag_list
// :
// (3) ['windows', 'crowdstrike', 'outage']
// tags
// :
// "windows, crowdstrike, outage"
// title
// :
// "Crowdstrike brings down Windows PC's"
// type_of
// :
// "article"
// url
// :
// "https://dev.to/mediocredevops/crowdstrike-brings-down-windows-pcs-5fnm"
// user
// :
// {name: 'Leon Nunes', username: 'mediocredevops', twitter_username: 'mediocreDevops', github_username: 'afro-coder', user_id: 456748, …}
// [[Prototype]]
// :
// Object
