import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers';

const Users = () => {
    const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div className='mx-2 flex-ankit overflow-y-auto' style={{maxHeight:"calc(80vh)"}}
    >
              {allUsers?.map((user, index) => (
          <User key={index} user={user} />
        ))}
    </div>
  )
}

export default Users