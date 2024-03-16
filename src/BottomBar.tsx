import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons/faFaceGrinHearts";
import { faFaceKissWinkHeart } from "@fortawesome/free-solid-svg-icons/faFaceKissWinkHeart";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons/faHandHoldingHeart";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BottomBar() {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full h-10 ">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
           <FontAwesomeIcon icon={faHeart} style={{color: "#008000",}} />
            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
              Trang chủ
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
          <FontAwesomeIcon icon={faHandHoldingHeart}  />
            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
              Cái gì đấy
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
          <FontAwesomeIcon icon={faFaceGrinHearts}  />
            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
              Yêu Thích
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
           <FontAwesomeIcon icon={faFaceKissWinkHeart}  />
            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
              Cá Nhân
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
