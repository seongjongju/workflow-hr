export const depths = [
    {
        id: "0",
        oneDepth: "인사관리",
        twoDepths: [
            {
                id: "00",
                twoDepth: "사원 목록",
                path: "/employees/list",
            },
        ],
    },
    {
        id: "1",
        oneDepth: "부서관리",
        twoDepths: [
            {
                id: "10",
                twoDepth: "부서 목록",
                path: "/departments/list",
            },
        ],
    },
    {
        id: "2",
        oneDepth: "근태관리",
        twoDepths: [
            {
                id: "20",
                twoDepth: "근태 현황",
                path: "/attendance/status",
            },
            {
                id: "21",
                twoDepth: "근태 수정 요청",
                path: "/attendance/requests",
            },
        ],
    },
    {
        id: "3",
        oneDepth: "휴가관리",
        twoDepths: [
            {
                id: "30",
                twoDepth: "휴가 신청",
                path: "/leaves/apply",
            },
            {
                id: "31",
                twoDepth: "휴가 현황",
                path: "/leaves/status",
            },
        ],
    },
    {
        id: "4",
        oneDepth: "전자결재",
        twoDepths: [
            {
                id: "40",
                twoDepth: "결재 문서 작성",
                path: "/approvals/create",
            },
            {
                id: "41",
                twoDepth: "내가 작성한 문서",
                path: "/approvals/my-documents",
            },
            {
                id: "42",
                twoDepth: "결재 대기함",
                path: "/approvals/pending",
            },
            {
                id: "43",
                twoDepth: "결재 완료함",
                path: "/approvals/completed",
            },
        ],
    },
    {
        id: "5",
        oneDepth: "일정관리",
        twoDepths: [
            {
                id: "50",
                twoDepth: "일정 조회",
                path: "/schedules/read",
            },
            {
                id: "51",
                twoDepth: "일정 등록",
                path: "/schedules/create",
            },
        ],
    },
    {
        id: "6",
        oneDepth: "시스템 관리",
        twoDepths: [
            {
                id: "60",
                twoDepth: "사용자 계정 관리",
                path: "/admin/users",
            },
        ],
    },
];