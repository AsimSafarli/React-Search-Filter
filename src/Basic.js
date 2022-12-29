<ul className="list">
        {Users.filter((user) => user.first_name.toLowerCase().includes(query)
        ).map(
          (user) => (
            <li key={user.id} className="listitem">
              {user.first_name}
            </li>
          ))}
      </ul>