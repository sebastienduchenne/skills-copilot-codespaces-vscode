function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/views/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    binToController: true,
    scope: {
      member: '=',
    }
  };
}