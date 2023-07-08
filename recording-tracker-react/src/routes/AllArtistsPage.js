import ElementList from "../components/Lists/ElementList";
import Artist from "../components/Elements/Artist";

const AllArtistsPage = ({ artists, handleAction }) => {
    const artistNodes = artists ?
        artists.map(
            (artist) => <Artist key={artist.id} artist={artist} handleAction={handleAction} />)
        : null;
    return (
        <div>
            <ElementList listNodes={artistNodes} elementName={"Artists"} />
        </div>
    );
}

export default AllArtistsPage;

// import React, { useEffect, useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import ArtistTemp from '../components/ArtistTemp';

// const AllArtistsPage = () => {
//     const { getAccessTokenSilently } = useAuth0();
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         (async () => {
//             try {
//                 const token = await getAccessTokenSilently({
//                     authorizationParams: {
//                         audience: 'https://localhost:7014',
//                         scope: 'read:posts',
//                     },
//                 });
//                 const response = await fetch('https://localhost:7014/api/artists', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 console.log('response', response);
//                 setPosts(await response.json());
//             } catch (e) {
//                 // Handle errors such as `login_required` and `consent_required` by re-prompting for a login
//                 console.error(e);
//             }
//         })();
//     }, [getAccessTokenSilently]);

//     // if (!posts) {
//     //     return <div>Loading...</div>;
//     // }

//     console.log('posts', posts);
//     const artists = posts.map((post, index) => (
//         <ArtistTemp key={index} artistData={post} />
//     ));
//     console.log('artists', artists);


//     return (<div>

//         {posts.length > 0 && artists}
//     </div>
//     );
// };

// export default AllArtistsPage;