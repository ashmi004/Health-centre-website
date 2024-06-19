import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ServiceCard from '../src/app/components/ServiceCard';
import 'tailwindcss/tailwind.css';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import UpdateModal from '../src/app/components/UpdateModal';
import EventModal from '../src/app/components/EventModal';
import HealthRecordModal from '../src/app/components/HealthRecordModal';

const AdminPage = () => {
const { data: session, status } = useSession();
const router = useRouter();
const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
const [isEventModalOpen, setIsEventModalOpen] = useState(false);
const [isHealthRecordModalOpen, setIsHealthRecordModalOpen] = useState(false);
const [updates, setUpdates] = useState([]);

useEffect(() => {
fetchUpdates();
}, []);

const fetchUpdates = async () => {
try {
const response = await axios.get('/api/updates');
setUpdates(response.data);
} catch (error) {
console.error('Error fetching updates:', error);
}
};

const handleAddUpdate = async (newUpdate) => {
try {
const response = await axios.post('/api/updates', { content: newUpdate });
setUpdates([...updates, response.data]);
} catch (error) {
console.error('Error adding update:', error);
}
};

useEffect(() => {
if (status === 'unauthenticated' || (session && session.user.email !== 'chandakashmi004@gmail.com')) {
router.replace('/login');
}
}, [status, session, router]);

const handleAddHealthRecord = () => {
setIsHealthRecordModalOpen(true);
};

if (status === 'loading') {
return <p>Loading...</p>;
}

if (session && session.user.email === 'chandakashmi004@gmail.com') {
return (
<div>
<Header />
<Navbar />
<div id="services" className="w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px]">
<div className="flex justify-center">
<h1 className="text-3xl md:text-4xl font-bold py-4">Hi Admin!</h1>
</div>
<div className="w-[10%] h-[2px] mx-auto my-2 bg-black" />
<div className="flex justify-center">
<p className="text-blue-300 py-4 md:max-w-[800px] leading-9 tracking-wide font-semibold text-2xl text-center">
Welcome Admin to your Dashboard!! Here you can Add Updates as well as Add doctors Availability which will be visible to all the users!
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-4">
<div onClick={() => setIsUpdateModalOpen(true)}>
<ServiceCard icon="/addupdate.webp" title="Add Updates" />
</div>
<div onClick={() => setIsEventModalOpen(true)}>
<ServiceCard icon="/addevent.png" title="Add Events" />
</div>
<Link href="/delete_updates">
<ServiceCard icon="/addupdate.webp" title="Delete Update" />
</Link>
<Link href="/delete_events">
<ServiceCard icon="/delete.webp" title="Delete Event" />
</Link>
<div onClick={handleAddHealthRecord}>
<ServiceCard icon="/add.png" title="Add Health Record" />
</div>
</div>
</div>
<UpdateModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} />
<EventModal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)} />
<HealthRecordModal isOpen={isHealthRecordModalOpen} onClose={() => setIsHealthRecordModalOpen(false)} />
</div>
);
} else {
router.replace('/');
return null;
}
};

export default AdminPage;
