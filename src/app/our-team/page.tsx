import User from '@/components/User/user';
import { UsersType } from '@/interfaces';
import React from 'react'

const OurTeam = async() => {
    const res = await fetch("https://fakestoreapi.com/users");
    const users: UsersType[] = await res.json();
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 ">
    <section className="flex flex-col">
      <h1 className="text-5xl font-bold text-center py-12">Our Team</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6  md:grid-cols-2 xl:gap-x-8">
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </div>
      </section>
    </section>
  </main>
  )
}

export default OurTeam