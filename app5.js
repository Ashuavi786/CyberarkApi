
avinash algamwar <avi.algamwar786@gmail.com>
1:53 PM (1 minute ago)
to me

$scope.downloadData = function () {
    if (!$scope.memberInfoResponse || $scope.memberInfoResponse.length === 0) {
        alert('No data to download.');
        return;
    }

    // Convert data to CSV
    const csvHeader = [
        'SafeUrlId,SafeName,SafeNumber,MemberId,MemberName,MemberType,MembershipExpirationDate,ExpiredMembershipEnable',
    ];
    const csvRows = $scope.memberInfoResponse.map((member) => {
        return [
            member.safeUrlId,
            member.safeName,
            member.safeNumber,
            member.memberId,
            member.memberName,
            member.memberType,
            member.membershipExpirationDate || 'Null',
            member.isExpiredMembershipEnable,
        ].join(','); // Join values with a comma
    });

    const csvContent = csvHeader.concat(csvRows).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Trigger the download
    const downloadLink = document.createElement('a');
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = 'MemberInfo.csv';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
