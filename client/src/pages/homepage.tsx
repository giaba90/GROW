import { useQuery } from '@apollo/client';
import { GET_POSTS_HP } from '@/graphql/queries';
import { Post } from '@/types/post';
import BlogPostList from '@/components/blog/BlogPostList';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import React from 'react';

export default function Homepage() {
  const { loading, error, data } = useQuery(GET_POSTS_HP);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const blogPosts: Post[] = data?.posts?.nodes || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <main className="w-full md:w-2/3 lg:w-3/4">
            <BlogPostList posts={blogPosts} />
          </main>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
