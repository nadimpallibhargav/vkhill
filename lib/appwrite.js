import { Account, Avatars, Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.vkhill.security',
    projectId: '6633624b002bddbc4870',
    databaseId: '66336594000c4cc9770c',
    userCollectionId: '66336707003515754cf3',
    storageId: '663369f800206d9ce349',
}

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 

const account = new Account(client);
const avatars = new Avatars(client);

export const createUser = async (username, email, password) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            username,
            email,
            password
        )

        if(!newAccount) throw Error

        const avatarUrl = avatars.getInitials(username)

        await signIn()
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}