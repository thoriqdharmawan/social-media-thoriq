let db = {
    users: [{
        userId: 'asgkmwpet2t23t2',
        email: 'thoriq@rmail.com',
        handle: 'thoriq',
        createdAt: '2019-12-24T04:31:49.730Z',
        imageUrl: 'image/asdfaspgas/asfasfa',
        bio: 'Helo there im using social media',
        website: 'https://thoriq.web.com',
        location: 'Central Java, Indonesia'
    }],
    screams: [{
        userHandle: 'thoriq',
        body: 'this is scream body',
        createdAt: '2019-12-24T04:31:49.730Z',
        likeCount: 5,
        commentCount: 2
    }],
    comments: [{
        userHandle: 'thoriq',
        screamId: '12rqegsdyaeyr',
        body: 'Good post!',
        createdAt: '2019-12-24T04:31:49.730Z'
    }],
    notification: [{
        recipient: 'user',
        sender: 'john',
        read: 'true | false',
        screamId: 'asfq23f23gsdg',
        type: 'like | comment',
        createdAt: '2019-12-26T04:31:49.730Z'
    }]
};

const userDetails = {
    // Redux data
    credentials: {
        userId: '124af3awsdgqweyt3qheh',
        email: 'thoriq@email.com',
        handle: 'thoriq',
        createdAt: '2019-12-24T04:31:49.730Z',
        imageUrl: 'sdfgaeg/dfgsdfg/dfhgds',
        bio: 'Hello there',
        website: 'https://thoriq.com',
        location: 'Cilacap'
    },
    Likes: [{
            userHandle: 'thoriq',
            screamId: '23t23gsdgawsdg',
        },
        {
            userHandle: 'thoriq',
            screamId: 'asfaseasfagw2hg',
        }
    ]
}