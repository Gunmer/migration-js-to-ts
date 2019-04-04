import * as User from "../model/user";

export class UserRepository {

    async findAll() {
        return await User.find().exec();
    }

    async findById(id: number) {
        return await User.find({id: id}).exec();
    }

    async save(user: any) {
        let allUsers = await this.findAll();
        let newUser = new User({
            id: allUsers.length,
            name: user.name
        });

        return await newUser.save();
    }

    async deleteById(id: number) {
        await User.findOneAndRemove({id: id})
    }
}
