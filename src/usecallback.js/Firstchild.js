import React, { memo } from 'react';

function Firstchild(memo) {
    console.log("chlid run");
    return (
        <div>
            <h1>Firstchild</h1>
        </div>
    );
}

export default memo(Firstchild);