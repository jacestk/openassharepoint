<?php

namespace OCA\openassharepoint;

/*
\OCP\Util::addTranslations('openassharepoint');

$l = \OCP\Util::getL10N('openassharepoint');
*/
class app{

	const name = 'openassharepoint';


	public static function launch()
	{
		if(\OC_User::getUser()!=false)
		{
				\OCP\Util::addScript( self::name, 'openassharepoint_v1');

/*				\OCP\Util::addstyle( self::name, 'styles');

				\OCP\App::registerAdmin(self::name, 'admin');*/
		}
	}

}

if (\OCP\App::isEnabled(app::name)) {

/*
        if(!\OC::$server->getDatabaseConnection()->tableExists( app::table )){
			try {
                $db_exist = \OCP\DB::prepare("CREATE table *PREFIX*" . app::table . "(name varchar(255) PRIMARY KEY,created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,locked_by varchar(255))");
                $db_exist->execute();
			}catch(Exception $e) {
			}
        }
*/
	app::launch();
}
