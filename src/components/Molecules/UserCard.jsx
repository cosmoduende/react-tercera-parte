import React from "react";

const UserCard =({name, username, email}) => (
    <div className="ed-grid">
                <article className="card">
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                   <h3 className="center">{name}</h3>
                <div className="s-main-center">
                     {`Username: ${username}`}
               </div>
                  <div className="s-main-center">
                     <a className="button--ghost-alert button--tiny" href="http://www.google.com">{`Correo: ${email}`}</a>
                  </div>
             </div>
               </article>
    </div>
)

export default UserCard;