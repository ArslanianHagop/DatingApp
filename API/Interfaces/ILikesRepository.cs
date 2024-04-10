using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface ILikesRepository
    {
        Task<UserLike> GetUserLike(int sourceUserId, int targetUserId);

        Task<AppUser> GetUserWithLikes(int userId);

        // predicate: do they want to get the users they liked or are liked by
        Task<PagedList<LikeDto>> GetUserLikes(LikesParams likesParams);
    }
}