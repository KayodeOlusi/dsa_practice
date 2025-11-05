/***
     * Given an array of meeting time intervals intervals where intervals[i] = [start_i, end_i],
    return the minimum number of conference rooms required.

    Example 1:
    Input: intervals = [[0,30],[5,10],[15,20]]
    Output: 2

    Example 2:
    Input: intervals = [[7,10],[2,4]]
    Output: 1
 * 
 */

var minMeetingRooms = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const heap = new MinHeap();

    heap.add(intervals[0][1]);

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= heap.peek()) {
            heap.poll();
        }
        heap.add(intervals[i][1]);
    }
    
    return heap.size();
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    poll() {
        return this.heap.shift();
    }
    add(value) {
        this.heap.push(value);
        this.heap.sort((a, b) => a - b);
    }
}