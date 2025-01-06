import React from "react";
import SeachForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1634912314704-c646c586b131?w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      category: "Robots",
      title: "We Robots",
    },
  ];
  
  return (
    <React.Fragment>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br /> connect with enterprenuers</h1>
        <p className="sub-heading !max-w-3xl">Submit ideas, vote on pitches and get connected with investors</p>
        <SeachForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">{query ? `Search results for "${query}"` : "All startups"}</p>
        <ul className="card_grid mt-7">
          {posts.map((post: StartupCardType) => (
            <StartupCard key={post?._id} post={post} />
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}
