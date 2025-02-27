// export const Age = ({ age }) => {
//     if (age < 18) {
//         return (
//             <div>
//                 <h1>You are not eligible to vote</h1>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <h1>You are eligible to vote ... </h1>
//             </div>
//         )
//     }
// }


export const Age = ({ age, isVoted }) => {
    // if (isVoted) {
    //     return (
    //         <div>
    //             <h1>You have already voted .... </h1>
    //         </div>
    //     );
    // }
    return (isVoted) ? (
        <div>
            <h1>You have already voted ....</h1>
        </div>
    ) : (
        (age < 18) ? (
            <div>
                <h1>You are not eligible to vote ... </h1>
            </div>
        ) : (
            <div>
                <h1>You are eligible to vote ... </h1>
            </div>
        )
    );
    // console.log(!isVoted);
    // let flag = "";
    // if (!isVoted) {
    //     flag = "✅";
    // } else {
    //     flag = "❌";
    // }
    // return (age < 18) ? (
    //     <div>
    //         <h1>You are not eligible to vote ... {isVoted && flag}</h1>
    //     </div>
    // ) : (
    //     <div>
    //         <h1>You are eligible to vote ... {!isVoted && flag} </h1>
    //     </div>
    // );
}