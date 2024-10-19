import { ProfileForm } from '@/components/user/profile-form';

export default function UserProfile() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <ProfileForm />
    </div>
  );
}