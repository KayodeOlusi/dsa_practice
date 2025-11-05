/**
 * Question
    You are given an array of meeting time intervals intervals where intervals[i] = [start_i, end_i].
    Determine if a person can attend all meetings.
    Return:
    true if the person can attend all meetings
    false otherwise

    Example:
    Input: intervals = [[0,30],[5,10],[15,20]]
    Output: false
    Explanation: There is a conflict between [0,30] and [5,10].

    Example 2:
    Input: intervals = [[7,10],[2,4]]
    Output: true
 */

var canAttendMeeting = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        if (current[0] < intervals[i - 1][0]) {
            return false;
        }
    }

    return true;
}