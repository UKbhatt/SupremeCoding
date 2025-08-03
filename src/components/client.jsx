import Avatar from 'react-avatar';

export function Client({ username }) {
  return (
    <div className="bg-tranparent flex flex-col col-2 items-start px-4 py-2 cursor-pointer">
      <Avatar name={username} size="50" round={true} />
      <span className="mt-2 font-mono text-sm text-white">{username}</span>
    </div>
  );
}
