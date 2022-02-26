import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";

const Profile = ({ login }) => {
  const history = useHistory();

  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);

  // for nested route
  const { path, url } = useRouteMatch();

  return (
    <>
      <div>Profile</div>
      <ul>
        <li>
          {/* here we want to append or add the /viewprofile url to the current url ie /profile url so we use url variable from useRouteMatch to do so */}
          {/* here the url now becomes /profile/viewprofile  */}
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>

      <Switch>
        {/* same as url we also need to add path variable to render the component */}
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  );
};

export default Profile;
