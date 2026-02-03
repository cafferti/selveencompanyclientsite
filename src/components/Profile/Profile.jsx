'use client';

// import React, { useState } from 'react';
import "./Profile.css";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const teamMembers = [
  {
    id: '1',
    name: 'Ponsak Longtau',
    firstName: 'Ponsak',
    lastName: 'Longtau',
    role: 'Managing Director',
    phone: '09034703963',
    email: 'ponsaklongtau@gmail.com',
    gender: 'Male',
    bio: 'Ponsak Longtau, our team lead is a thriving real estate professional based in Jos, Plateau State, boasting 8 years of experience in the dynamic property market.',
    image: '_MG_1293.jpg',
  },
  {
    id: '2',
    name: 'Nandom Joseph Gora',
    firstName: 'Nandom',
    lastName: 'Joseph Gora',
    role: 'Architect',
    phone: '07068785398',
    email: 'nandomgora88@gmail.com',
    gender: 'Male',
    bio: 'A creative visionary blending architecture and real estate expertise, Nandom Gora designs spaces for our clients that inspire and elevate.',
    image: '3nandom_joseph_gora.jpg',
  },
  {
    id: '3',
    name: 'ML Kyemang Esq',
    firstName: 'ML Kyemang',
    lastName: 'Esq',
    role: 'Attorney',
    phone: '08036028003',
    email: 'kyemang@outlook.com',
    gender: 'Male',
    bio: 'Our legal expert who specializes in real estate law, Barrister Kyemang Mundi skillfully helps us to navigate the complexities of property transactions.',
    image: './1st.jpg',
  },
  {
    id: '4',
    name: 'William Seyilnen',
    firstName: 'William',
    lastName: 'Seyilnen',
    role: 'Leasing/Appraisal Director',
    phone: '08021123556',
    email: 'williammuseyilnen@gmail.com',
    gender: 'Female',
    bio: 'A seasoned professional in the real estate industry, Seyilnen William expertly helps us to navigate the complexities of leasing and appraisal.',
    image: './4william_seyilnen.png',
  },
  {
    id: '5',
    name: 'Ishaku Dyelshak',
    firstName: 'Ishaku',
    lastName: 'Dyelshak',
    role: 'IT/Compliance Officer',
    phone: '09035249481',
    email: 'ishakudyelshak@gmail.com',
    gender: 'Male',
    bio: 'A meticulous guardian of our data integrity, he ensures we adhere to regulatory compliance in the real estate industry, Ishaku Dyelshak ensures a smooth running of all our ICT infrastructure and services.',
    image: '2nd.jpg',
  },
  {
    id: '6',
    name: 'Dape Nan\'ep Dawam',
    firstName: 'Dape',
    lastName: 'Nan\'ep Dawam',
    role: 'Project Manager',
    phone: '08165363081',
    email: 'dapenanep@gmail.com',
    gender: 'Male',
    bio: 'A dynamic member of our team with years of experience in the real estate industry, Dape Nan\'ep expertly orchestrates the successful completion of our diverse projects.',
    image: 'img5.jpg',
  },
];

export default function TeamProfile() {
  return (
    <div id="profile" className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:items-center md:flex-row">
          <div>
            <h1 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to excellence
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({ member }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary/30">
      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" fontSize="24" fill="%239ca3af" textAnchor="middle" dy=".3em"%3EProfile Image%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Role */}
        <div className="mb-4">
          <h3 className="mb-1 text-2xl font-black text-blue-500">
            {member.firstName} {member.lastName}
          </h3>
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide">
            {member.role}
          </p>
        </div>

        {/* Divider */}
        <div className="mb-4 h-px bg-border" />

        {/* Contact Info */}
        <div className="mb-4 space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="min-w-fit font-medium text-muted-foreground">
              Phone:
            </span>
            <a
              href={`tel:${member.phone}`}
              className="text-red-500 hover:underline font-bold"
            >
              {member.phone}
            </a>
          </div>
          <div className="flex items-start gap-2">
            <span className="min-w-fit font-medium text-muted-foreground">
              Email:
            </span>
            <a
              href={`mailto:${member.email}`}
              className="truncate text-red-500 hover:underline font-bold"
            >
              {member.email}
            </a>
          </div>
          <div className="flex items-start gap-2">
            <span className="min-w-fit font-medium text-muted-foreground">
              Gender:
            </span>
            <span className="text-foreground">{member.gender}</span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {member.bio}
        </p>
      </div>
    </div>
  );
}