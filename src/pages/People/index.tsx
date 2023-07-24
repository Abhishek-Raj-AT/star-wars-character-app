import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Loader } from "../../Loader";
import { useEffect } from "react";
import { getPeopleActions } from "../../redux/PeopleSlice/PeopleAsyncThunk";
import Pagination from "../../Components/Pagination";
import constant from "../../config/constant";
import { setTotalPageCount } from "../../service/ApiHelper";
import { peopleAction } from "../../redux/PeopleSlice";
import { Link } from "react-router-dom";

const People = () => {
  const { list, page, total, limit } = useSelector(
    (state: IRootState) => state.peopleStateData
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getPeopleActions({
        id: constant.defaultUserId,
        page,
        size: limit,
      })
    );
  }, [dispatch, limit, page]);
  const totalPage = setTotalPageCount(total, limit);
  const loading = useSelector(
    (state: IRootState) => state.peopleStateData.isLoading
  );
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(peopleAction.setCurrentPage(page));
    dispatch(
      getPeopleActions({
        page,
        size: limit,
      })
    );
  };
  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            {list.map((person, id) => {
              return (
                <ul key={id}>
                  <Link to={`/people/${id}`}> name:{person.name}</Link>
                  <p> height:{person.height}</p>
                  <p> Hair Color:{person.hair_color}</p>
                  <p> Skin color: {person.skin_color}</p>
                  <p>eye color:{person.eye_color}</p>
                  <p>birth year:{person.birth_year}</p>
                  <p>gender:{person.gender}</p>
                  <p> Home World:{person.homeworld}</p>
                </ul>
              );
            })}
          </div>
        )}
      </div>
      <Pagination
        page={page}
        onPageChangeHandler={pageChangeHandler}
        totalPages={
          totalPage ? totalPage : constant.page.defaultCurrentPaginationNumber
        }
      />
    </>
  );
};
export default People;
