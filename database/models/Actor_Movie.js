module.exports = (sequelize, dataTypes) => {
    let alias = "Actor_Movie"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        actor_id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            notNull: true,
        },
        movie_id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            notNull: true,
        }
    }
    let config = {
        tableName: "actor_movie",
        timestamps: false
    }

    const Actor_Movie = sequelize.define(alias,cols,config)

    Actor_Movie.associate = function(models){
        Actor_Movie.belongsToMany(models.Movie, {
            through: "Actor_Movie",
            as: "movie",
            foreignKey: "movie_id",
        })
        Actor_Movie.belongsToMany(models.Actor, {
            through: "Actor_Movie",
            as: "actor",
            foreignKey: "actor_id",
        })
    }

    return Actor_Movie
}